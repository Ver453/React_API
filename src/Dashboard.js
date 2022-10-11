import {useNavigate} from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Tables from "./Tables";
import { Button } from "antd";

function Dashboard() {

    const [summaryData,setSummaryData]=useState("");
    const [transactionData,setTransactionData]=useState("")
    const [ticketsData,setTicketData]=useState("")
    const [showdata,setShowData]=useState(false)
    const navigate=useNavigate()
    const token = localStorage.getItem("token") || undefined
    

    const columntransaction=[
        {
            title:"Sender Full Name",
            dataIndex:"Sender Full Name",
            key:"SENDER FULL NAME"
        },
        {
            title:"Receiver Full Name",
            dataIndex:"Receiver Full Name",
            Key:"Receiver Full Name"
        },
        {
            title:"Current Status",
            dataIndex:"Current Status",
            Key:"Current Status"
        },
        {
            title:"Send Amount",
            dataIndex:"Send Amount",
            Key:"Send Amount"
        },
        {
            title:"Receive Amount",
            dataIndex:"Receive Amount",
            Key:"Receive Amount"
        }
    ]
    const columnticket=[
        {
            title:"ticket_id",
            dataIndex:"ticket_id",
            key:"ticket_id"
        },
        {
            title:"ticket_category",
            dataIndex:"ticket_category",
            Key:"ticket_category"
        },
        {
            title:"ticket_status",
            dataIndex:"ticket_status",
            Key:"ticket_status"
        },
        {
            title:"ticket_priority",
            dataIndex:"ticket_priority",
            Key:"ticket_priority"
        },
        {
            title:"assign_to",
            dataIndex:"assign_to",
            Key:"assign_to"
        }
    ]

    const Logout=()=>{
        localStorage.clear("token")
        navigate("/")
    }
    useEffect(()=>{

        const getdata=()=>{
            axios.all([
                axios.get( "https://jp-dev.cityremit.global/web-api/transaction-manager/v1/admin/dashboard/summary",{
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }),
                axios.post("https://jp-dev.cityremit.global/web-api/transaction-manager/v1/admin/dashboard/search",null,{
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }),
                axios.post("https://jp-dev.cityremit.global/web-api/config/v1/tickets/search",null,{
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                })
            ])
            .then(
                axios.spread(
                    (summary,transaction,tickets)=>{
                        setSummaryData(summary.data.data)
                        setTransactionData(transaction.data.data)
                        setTicketData(tickets.data.data.data)
                        setShowData(true)
                    }
                )
            )
        }
        getdata()
    },[token,navigate])
  return (
    <>
    <div style={{display:"flex", justifyContent:"end"}}>
    <Button
    onClick={Logout}
    type="primary"
    style={{
      margin: "10px",
      borderRadius: "5px",
    }}
  >
    Logout
  </Button>
    </div>
    <h1>Recent transaction</h1><Tables datasource={transactionData} columns={columntransaction} />
    <h1>Tickets</h1><Tables datasource={ticketsData} columns={columnticket} />    
    </>
  )
}

export default Dashboard