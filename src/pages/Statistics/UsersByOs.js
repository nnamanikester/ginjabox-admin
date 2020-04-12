import React, { useEffect, useState } from "react";
import { apiUrl } from "../../config";
import axios from "axios";
import {
  MDBCol,
  MDBCardBody,
  MDBCard,
  MDBCardHeader
} from "mdbreact"
import { Doughnut } from "react-chartjs-2";

const UsersByOs = () => {
  const [loading, setLoading] = useState(false);
  const [android, setAndroid] = useState(0);
  const [ios, setIos] = useState(0);

  const loadUsersOs = async () => {
    setLoading(true);
    axios.get(`${apiUrl}/statistics/users-os`, {
      headers: { "x-admin-auth": localStorage.getItem('token') }
    })
      .then(res => {
        setAndroid(res.data.data.android);
        setIos(res.data.data.ios);
        setLoading(false);
      })
      .catch(err => {
        return 0;
      })
  }

  useEffect(() => {
    loadUsersOs();
  }, []);


  const mobileChartData = {
    labels: ["Android", "IOS"],
    datasets: [
      {
        data: [android, ios],
        backgroundColor: ["#F7464A", "#46BFBD"],
        hoverBackgroundColor: ["#FF5A5E", "#5AD3D1"]
      }
    ]
  };

  const mobileChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    legend: {
      labels: {
        fontColor: "black"
      }
    }
  };

  return (
    <MDBCol lg="6" md="12">
      <MDBCard className="mb-4">
        <MDBCardHeader className="teal accent-4 text-white">
          Users By OS
              </MDBCardHeader>
        <MDBCardBody>
          <Doughnut
            data={mobileChartData}
            options={mobileChartOptions}
            height={135}
          />
          {loading && <div className="spinner-border spinner-border-lg teal-text" role="status" ><span className="sr-only">Loading...</span></div>}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default UsersByOs;