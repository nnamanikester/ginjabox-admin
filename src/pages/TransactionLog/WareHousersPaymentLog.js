import React, { useEffect, useState } from "react";
import { apiUrl } from "../../config";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBDataTable,
  MDBView,
  MDBBadge
} from "mdbreact";


const WareHousersPaymentLog = () => {
  const [loading, setLoading] = useState(false);
  const [payments, setPayments] = useState([]);

  const data = {
    columns: [
      {
        label: "S/N",
        field: "sn",
      },
      {
        label: "Payment ID",
        field: "paymentId",
      },
      {
        label: "Amount",
        field: "amount",
      },
      {
        label: "Channel",
        field: "channel",
      },
      {
        label: "Info",
        field: "info",
      },
      {
        label: "Customer Email",
        field: "customerEmail",
      },
      {
        label: "Expires",
        field: "expires",
      },
      {
        label: "Status",
        field: "status",
      },
      {
        label: "Date",
        field: "date",
      }
    ],
    rows: !loading ? payments : [{
      sn: <Skeleton />,
      paymentId: <Skeleton />,
      amount: <Skeleton />,
      channel: <Skeleton />,
      info: <Skeleton />,
      customerEmail: <Skeleton />,
      expires: <Skeleton />,
      status: <Skeleton />,
      date: <Skeleton />
    }]
  };

  const loadPayments = async () => {
    setLoading(true);
    axios.get(`${apiUrl}/warehousers-payments`, {
      headers: { "x-admin-auth": localStorage.getItem('token') }
    })
      .then(res => {
        let sn = payments.length;
        const rows = res.data.data.map(payment => {
          const row = {
            sn: sn + 1,
            paymentId: payment.id,
            amount: payment.amount,
            channel: payment.channel,
            info: payment.info,
            customerEmail: payment.customer.email,
            expires: payment.requisition.expires,
            status: payment.status === 2 ? <MDBBadge color="success">Success</MDBBadge> : <MDBBadge className="danger-color">Failed</MDBBadge>,
            date: payment.createdAt
          };
          sn++;
          return row;
        })
        setLoading(false);
        setPayments(rows);
      })
      .catch(err => {
        console.log(err);
        return [];
      })
  }

  useEffect(() => {
    loadPayments();
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
            <span className="white-text text-bold mx-3">
              Warehousers' Payment Log
            </span>
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

export default WareHousersPaymentLog;
