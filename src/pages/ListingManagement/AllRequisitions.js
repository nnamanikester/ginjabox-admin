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
  const [requisitions, setRequisitions] = useState([]);

  const data = {
    columns: [
      {
        label: "S/N",
        field: "sn",
      },
      {
        label: "Requisition ID",
        field: "id",
      },
      {
        label: "Listing",
        field: "listing",
      },
      {
        label: "Products",
        field: "products",
      },
      {
        label: "Cost",
        field: "cost",
      },
      {
        label: "Duration",
        field: "duration",
      },
      {
        label: "Space",
        field: "space",
      },
      {
        label: "Expires",
        field: "expires",
      },
      {
        label: "Status",
        field: "status",
      },
    ],
    rows: !loading ? requisitions : [{
      sn: <Skeleton />,
      id: <Skeleton />,
      listing: <Skeleton />,
      products: <Skeleton />,
      cost: <Skeleton />,
      duration: <Skeleton />,
      space: <Skeleton />,
      expires: <Skeleton />,
      status: <Skeleton />
    }]
  };

  const loadRequisitions = async () => {
    setLoading(true);
    axios.get(`${apiUrl}/requisitions`, {
      headers: { "x-admin-auth": localStorage.getItem('token') }
    })
      .then(res => {
        let sn = requisitions.length;
        const rows = res.data.data.map(requisition => {
          const row = {
            sn: sn + 1,
            id: requisition.id,
            listing: requisition.listing.id,
            products: requisition.products.length,
            cost: requisition.cost.baseCost,
            duration: requisition.duration.name,
            space: requisition.space,
            expires: requisition.expires,
            status: requisition.status === 2 ? <MDBBadge color="success">Active</MDBBadge> : <MDBBadge className="danger-color">Canclled</MDBBadge>,
          };
          sn++;
          return row;
        })
        setLoading(false);
        setRequisitions(rows);
      })
      .catch(err => {
        console.log(err);
        return [];
      })
  }

  useEffect(() => {
    loadRequisitions();
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
