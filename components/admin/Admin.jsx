import { useRef, useState, useEffect } from 'react'
import { DownloadTableExcel, useDownloadExcel } from 'react-export-table-to-excel'
import {
  Container,
  Title,
  Table,
  Head,
  TH,
  TD,
  Header,
  Buttons,
  ActionButton,
  ConfirmationModal,
  Modal,
  TableDivisor,
  DataContainer,
  InnerTd,
} from './Elements'

const Admin = ({ users, votes }) => {

  const [modal, setModal] = useState(false)
  const tableRef = useRef()
  let usersNum = 0
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: 'Users table',
    sheet: 'Users'
  })

  const handleDelete = () => {
    console.log("delete everything!")
  }

  return (
    <Container>
      {/* USERS */}
      <Header>
        <Title>Users</Title>
        <Buttons>
          <ActionButton onClick={onDownload}>Download Excel</ActionButton>
          <ActionButton onClick={() => setModal(true)}>Delete all</ActionButton>
        </Buttons>
      </Header>
      <Table ref={tableRef}>
        <Head>
          <tr>
            <TH>Name</TH>
            <TH>Email</TH>
          </tr>
        </Head>
        <tbody>
          {
            users.map(user => {
              //Easier than finding index in array
              usersNum++

              return (
                <tr key={usersNum}>
                  <TD>{usersNum} - {user.name}</TD>
                  <TD>{user.email}</TD>
                </tr>
              )
            })
          }
        </tbody>
      </Table>

      <TableDivisor />
      {/* VOTES */}
      <Title>Votes</Title>
      <Table>
        <Head>
          <tr>
            <TH>Category</TH>
            <TH>Nominee / Votes</TH>
          </tr>
        </Head>
        <tbody>
          {
            Object.keys(votes).length > 0 ?
              Object.keys(votes).map(key => {
                return (
                  <tr>
                    <TD>{key}</TD>
                    {
                      votes[key].map(vote => {
                        return (
                          <DataContainer>
                            <InnerTd>{vote.nominee}</InnerTd>
                            <InnerTd>{vote.votes}</InnerTd>
                          </DataContainer>
                        )
                      })
                    }
                  </tr>
                )
              }) : null
          }
        </tbody>
      </Table>

      {
        modal ?
          <ConfirmationModal>
            <Modal>
              <p>Delete everything?</p>
              <Buttons>
                <ActionButton onClick={() => setModal(false)}>Cancel</ActionButton>
                <ActionButton onClick={handleDelete}>Delete</ActionButton>
              </Buttons>
            </Modal>
          </ConfirmationModal> :
          null
      }
    </Container>
  )
}

export default Admin