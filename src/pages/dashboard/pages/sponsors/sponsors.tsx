import { useState } from "react";
import { Badge, Box, createStyles, Flex, Text } from "@mantine/core";
import { DataTable } from "mantine-datatable";

import { useSponsors } from "modules/dashboard/hooks";

interface SponsorsProps {}

const useStyles = createStyles(theme => ({
  columnTitle: {
    fontSize: "12px",
    fontWeight: 600,
    color: "#B1B1B8",
    fontFamily: "Rubik"
  },
  columnAccessor: {
    fontSize: "15px",
    fontWeight: 500,
    color: "#1D1D1F",
    fontFamily: "Rubik"
  },

  pagination: {
    marginTop: theme.spacing.xl, // Adjust the spacing as needed
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const Sponsors = (props: SponsorsProps) => {
  const [page, setPage] = useState(1);
  const { sponsors, count, isLoading } = useSponsors({});
  const { classes } = useStyles();

  function addSpacesToNumber(number: number) {
    const numStr = number.toString();

    return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  return (
    <Box style={{ paddingTop: "60px" }}>
      <DataTable
        records={sponsors}
        fetching={isLoading}
        columns={[
          { accessor: "id", title: "#", width: 50, render: (record, idx) => <Badge variant="light">{idx + 1}</Badge> },
          {
            accessor: "fullName",
            title: <Text className={classes.columnTitle}>F.I.SH</Text>,
            render: record => <Text className={classes.columnAccessor}>{record.fullName}</Text>
          },
          { accessor: "phone", title: <Text className={classes.columnTitle}>TELFON RAQAM</Text>, render: record => <Text className={classes.columnAccessor}>{record.phone}</Text> },
          {
            accessor: "amount",
            title: <Text className={classes.columnTitle}>AJRATILGAN SUMMA</Text>,
            render: record => (
              <Flex align="center" gap="3px" className={classes.columnAccessor}>
                {addSpacesToNumber(record.amount)}
              </Flex>
            )
          },
          {
            accessor: "createdAt",
            title: <Text className={classes.columnTitle}>SANA</Text>,
            render: record => <Text className={classes.columnAccessor}>{record.createdAt}</Text>
          },
          { accessor: "status", title: <Text className={classes.columnTitle}>HOLATI</Text>, render: record => <Text className={classes.columnAccessor}>{record.status}</Text> }
        ]}
        totalRecords={count}
        recordsPerPage={10}
        page={page}
        onPageChange={p => setPage(p)}
      />
    </Box>
  );
};

export default Sponsors;
