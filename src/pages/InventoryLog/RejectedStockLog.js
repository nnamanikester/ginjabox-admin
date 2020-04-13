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
const RejectedStockLog = () => {

  const [loading, setLoading] = useState(false);
  const [stocks, setStocks] = useState([]);

  const data = {
    columns: [
      {
        label: "S/N",
        field: "sn",
      },
      {
        label: "Name",
        field: "name",
      },
      {
        label: "Stock ID",
        field: "stockId",
      },
      {
        label: "Date",
        field: "date",
      }
    ],
    rows: !loading ? stocks : [{
      sn: <Skeleton />,
      id: <Skeleton />,
      agentName: <Skeleton />,
      agentPhone: <Skeleton />,
      agentIdNo: <Skeleton />,
      agentIdentification: <Skeleton />,
      pickupDateFrom: <Skeleton />,
      pickupDateTo: <Skeleton />,
      status: <Skeleton />
    }]
  };


  const loadOrders = async () => {
    setLoading(true);
    axios.get(`${apiUrl}/stocks`, {
      headers: { "x-admin-auth": localStorage.getItem('token') }
    })
      .then(res => {
        let sn = stocks.length;
        const rows = res.data.data.map(order => {
          const row = {
            sn: sn + 1,
            id: order.id,
            agentIdNo: order.pickupAgentIdNumber,
            agentName: order.pickupAgentName,
            agentPhone: order.pickupAgentPhone,
            agentIdentification: order.pickupAgentIdentification,
            pickupDateFrom: order.pickupDate.min,
            pickupDateTo: order.pickupDate.max,
            status: order.status === 2 ? <MDBBadge color="success">Success</MDBBadge> : <MDBBadge className="danger-color">Failed</MDBBadge>,
          };
          sn++;
          return row;
        })
        setLoading(false);
        setStocks(rows);
      })
      .catch(err => {
        console.log(err);
        return [];
      })
  }

  useEffect(() => {
    loadOrders();
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
              Rejected Stock Log
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

export default RejectedStockLog;
