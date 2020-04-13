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

const AllRequisitions = () => {

  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  const data = {
    columns: [
      {
        label: "S/N",
        field: "sn",
      },
      {
        label: "Order ID",
        field: "id",
      },
      {
        label: "Agent ID Number",
        field: "agentIdNo",
      },
      {
        label: "Agent Name",
        field: "agentName",
      },
      {
        label: "Agent Phone",
        field: "agentPhone",
      },
      {
        label: "Agent Identification",
        field: "agentIdentification",
      },
      {
        label: "Pickup Date From",
        field: "pickupDateFrom",
      },
      {
        label: "Pickup Date To",
        field: "pickupDateTo",
      },
      {
        label: "Order Status",
        field: "status",
      },
    ],
    rows: !loading ? orders : [{
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
    axios.get(`${apiUrl}/dispatch-orders`, {
      headers: { "x-admin-auth": localStorage.getItem('token') }
    })
      .then(res => {
        let sn = orders.length;
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
        setOrders(rows);
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
              All Requisitions
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

export default AllRequisitions;
