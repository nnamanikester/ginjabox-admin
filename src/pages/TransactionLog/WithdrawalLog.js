import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../../config";
import { money } from "../../functions";
import moment from "moment";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBDataTable,
  MDBView,
  MDBBadge
} from "mdbreact";
import Skeleton from "react-loading-skeleton";


const WithdrawalLog = () => {
  const [loading, setLoading] = useState(false);
  const [trans, setTrans] = useState([]);

  const data = {
    columns: [
      {
        label: "S/N",
        field: "sn",
      },
      {
        label: "Transaction ID",
        field: "transactionId",
      },
      {
        label: "Type",
        field: "type",
      },
      {
        label: "User Email",
        field: "userEmail",
      },
      {
        label: "Amount",
        field: "amount",
      },
      {
        label: "Commission",
        field: "commission",
      },
      {
        label: "Description",
        field: "desc",
      },
      {
        label: "Status",
        field: "status",
      },
      {
        label: "Transaction Date",
        field: "date",
      }
    ],
    rows: !loading ? trans : [{
      sn: <Skeleton />,
      transactionId: <Skeleton />,
      userEmail: <Skeleton />,
      type: <Skeleton />,
      status: <Skeleton />,
      desc: <Skeleton />,
      amount: <Skeleton />,
      commission: <Skeleton />,
      date: <Skeleton />
    }]
  };

  const loadTransactions = async () => {
    setLoading(true);
    axios.get(`${apiUrl}/transactions`, {
      headers: { "x-admin-auth": localStorage.getItem('token') }
    })
      .then(res => {
        let sn = trans.length;
        const rows = res.data.data.map(tran => {
          if (tran.description === "withdrawal") {
            const row = {
              sn: sn + 1,
              transactionId: tran.id,
              userEmail: tran.user.email,
              type: tran.type,
              desc: tran.description,
              commission: <> &#8358; {money.format(parseInt(tran.fees))} </>,
              amount: <> &#8358; {money.format(parseInt(tran.amount))} </>,
              status: tran.status === 2 ? <MDBBadge color="success">Success</MDBBadge> : <MDBBadge className="danger-color">Failed</MDBBadge>,
              date: moment(tran.createdAt).format('L')
            };
            sn++;
            return row;
          }
          return null;
        })
        setLoading(false);
        setTrans([...rows]);
      })
      .catch(err => {
        return [];
      })
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <MDBContainer>
      <MDBCard>
        <MDBCard narrow className="z-depth-0">
          <MDBView
            cascade
            className="teal accent-4 narrower py-2 my-3 d-flex justify-content-between align-items-center"
          >
            <div className="text-left"></div>
            <span className="white-text text-bold mx-3">Withdrawal Log</span>
            <div className="text-right"></div>
          </MDBView>
        </MDBCard>
        <MDBCardBody>
          <MDBDataTable striped responsive bordered small hover data={data} />
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default WithdrawalLog;
