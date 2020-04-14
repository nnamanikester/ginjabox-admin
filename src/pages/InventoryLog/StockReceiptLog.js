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
const StockReceiptLog = () => {

  const [loading, setLoading] = useState(false);
  const [stocks, setStocks] = useState([]);

  const data = {
    columns: [
      {
        label: "S/N",
        field: "sn",
      },
      {
        label: "Stock ID",
        field: "id",
      },
      {
        label: "Stock Type",
        field: "type",
      },
      {
        label: "Products",
        field: "products",
      },
      {
        label: "Requisitioin",
        field: "requisition",
      },
      {
        label: "Stock Dispatch",
        field: "dispatch",
      },
      {
        label: "Status",
        field: "status",
      }
    ],
    rows: !loading ? stocks : [{
      sn: <Skeleton />,
      id: <Skeleton />,
      type: <Skeleton />,
      products: <Skeleton />,
      requisition: <Skeleton />,
      diapatch: <Skeleton />,
      status: <Skeleton />
    }]
  };


  const loadStocks = async () => {
    setLoading(true);
    axios.get(`${apiUrl}/stocks`, {
      headers: { "x-admin-auth": localStorage.getItem('token') }
    })
      .then(res => {
        let sn = stocks.length;
        const rows = res.data.data.map(stock => {
          if(stock.status === 3) {
          const row = {
            sn: sn + 1,
            id: stock.id,
            type: stock.type,
            products: stock.products.length,
            dispatch: stock.dispatch.id,
            requisition: stock.requisition.id,
            status: <MDBBadge className="success-color">Received</MDBBadge>,
          };
          sn++;
          return row;
        }
        return null;
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
    loadStocks();
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
              Stock Receipt Log
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

export default StockReceiptLog;
