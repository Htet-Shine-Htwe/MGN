import React from 'react'
import { TableCell, TableRow } from '../table'

const ContentTableRow = ({content=""} :{content?:string}) => {
  return (
    <TableRow>
    <TableCell align="center"  colSpan={4}>{content}</TableCell>
</TableRow>
  )
}

export default ContentTableRow