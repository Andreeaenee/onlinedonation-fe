import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const CustomTable = ({ data, headers }) => {
  const navigate = useNavigate()

  const handleRowClick = (id) => {
    navigate(`/dashboard/users/user-profile/${id}`)
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell key={index}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              onClick={() => handleRowClick(row.user_id)}
              style={{ cursor: 'pointer' }}
            >
              {headers.map((header, colIndex) => (
                <TableCell key={colIndex}>
                  {row[header.toLowerCase()] !== null
                    ? row[header.toLowerCase()]
                    : '-'}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CustomTable
