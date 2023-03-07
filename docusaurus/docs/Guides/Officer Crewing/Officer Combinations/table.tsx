import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Typography } from '@mui/material';
import { data, officerCombo } from './officers';

const Example = () => {
  const columns = useMemo<MRT_ColumnDef<officerCombo>[]>(
    () => [
      {
        accessorKey: 'comboName',
        header: 'Combination Name',
      },
      {
        accessorKey: 'captain.officerName',
        header: 'Captain',
      },
      {
        accessorKey: 'firstOfficer.officerName',
        header: 'First Officer',
      },
      {
        accessorKey: 'secondOfficer.officerName',
        header: 'Second Officer',
      },
    ],
    [],
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      renderDetailPanel={({ row }) => (
        <Box
          sx={{
            display: 'list',
            margin: 'auto',
            gridTemplateColumns: '1fr 1fr',
            width: '100%',
          }}
        >
          <Typography><b>Purpose:</b> {row.original.purpose}</Typography>
          <Typography><b>Hostile Type:</b> {row.original.hostileType}</Typography>
          <Typography><b>Ship:</b> {row.original.ship}</Typography>
          <Typography><b>Tags:</b> {row.original.tags}</Typography>
          <Typography><b>Credit:</b> {row.original.credit}</Typography>
        </Box>
      )}
    />
  );
};

export default Example;