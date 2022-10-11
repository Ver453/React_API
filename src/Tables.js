import React from 'react'
import { Table } from 'antd'

const Tables = ({datasource,columns}) => {
  return (
    <>
    <Table 
    className='table'
    pagination={true}

    dataSource={datasource}
    columns={columns}

    />
    
    </>
  )
}

export default Tables