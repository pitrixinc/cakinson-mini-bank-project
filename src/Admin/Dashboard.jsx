import React from 'react';
import AdminNavbar from './AdminNavbar';
import useGetData from '../custom-hooks/useGetData';
import {Container,Row, Col} from "reactstrap";

const Dashboard = () => {
  const {data: transactions} = useGetData('transactions')
  const {data: users} = useGetData('users')

  return (
    <div>
      <AdminNavbar/>
      <div className="md:p-4 lg:p-4 p-1 sm:ml-64">
        <div className="p-4 rounded-lg bg-white border border-gray-200">
          <>
            <section>
              <Container>
                <Row>
                  <Col className="lg:col-auto md:col-12">
                    <div className="p-4 rounded-lg bg-blue-500 text-white">
                      <h5 className="text-sm font-bold uppercase">Total Transactions</h5>
                      <span className="text-2xl font-bold">Check Your Transaction Record</span>
                    </div>
                  </Col>
                  <Col className="lg:col-auto md:col-12 mt-5">
                    <div className="p-4 rounded-lg bg-green-500 text-white mt-4 lg:mt-0">
                      <h5 className="text-sm font-bold uppercase">Total Account Users</h5>
                      <span className="text-2xl font-bold">{users.length}</span>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
