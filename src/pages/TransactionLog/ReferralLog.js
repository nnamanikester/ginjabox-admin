import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../../config";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBDataTable,
  MDBView
} from "mdbreact";


const ReferralLog = () => {
  const [loading, setLoading] = useState(false);
  const [referrals, setReferrals] = useState([]);

  const data = {
    columns: [
      {
        label: "S/N",
        field: "sn",
      },
      {
        label: "Referral ID",
        field: "refId",
      },
      {
        label: "Referral Code",
        field: "refCode",
      },
      {
        label: "User ID",
        field: "userId",
      },
      {
        label: "Referrals",
        field: "referrals",
      },
      {
        label: "Date Created",
        field: "date",
      }
    ],
    rows: !loading ? referrals : [{
      sn: <div className="spinner-border spinner-border-sm teal-text" role="status" ><span className="sr-only">Loading...</span></div >,
      refId: <div className="spinner-border spinner-border-sm teal-text" role="status" ><span className="sr-only">Loading...</span></div >,
      refCode: <div className="spinner-border spinner-border-sm teal-text" role="status" ><span className="sr-only">Loading...</span></div >,
      userId: <div className="spinner-border spinner-border-sm teal-text" role="status" ><span className="sr-only">Loading...</span></div >,
      referrals: <div className="spinner-border spinner-border-sm teal-text" role="status" ><span className="sr-only">Loading...</span></div >,
      date: <div className="spinner-border spinner-border-sm teal-text" role="status" ><span className="sr-only">Loading...</span></div >
    }]
  };


  const loadReferrals = async () => {
    setLoading(true);
    axios.get(`${apiUrl}/referrals`, {
      headers: { "x-admin-auth": localStorage.getItem('token') }
    })
      .then(res => {
        let sn = referrals.length;
        const rows = res.data.data.map(ref => {
          const row = {
            sn: sn + 1,
            refId: ref.id,
            refCode: ref.refCode,
            userId: ref.userId,
            referrals: ref.refs.length,
            date: ref.createdAt
          };
          sn++;
          return row;
        })
        setLoading(false);
        setReferrals([...rows]);
      })
      .catch(err => {
        console.log(err);
        return [];
      })
  }

  useEffect(() => {
    loadReferrals();
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
            <span className="white-text text-bold mx-3">Referral Log</span>
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

export default ReferralLog;
