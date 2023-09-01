import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, createStyles, Flex, Text } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { StringParam, useQueryParam } from "use-query-params";

import { useStudents } from "modules/dashboard/hooks";

import EyeBlue from "../../../../components/eye-blue";

interface StudentsProps {}

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
    marginTop: theme.spacing.xl,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const Students = (props: StudentsProps) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [search = ""] = useQueryParam("search", StringParam);
  const [degree = ""] = useQueryParam("degree", StringParam);
  const [university = ""] = useQueryParam("university", StringParam);
  const { count, students, isLoading } = useStudents({ page, search: search!, degree: degree!, university: university! });
  const { classes } = useStyles();

  function addSpacesToNumber(number: number) {
    const numStr = number.toString();

    return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  return (
    <Box>
      <DataTable
        records={students}
        fetching={isLoading}
        columns={[
          {
            accessor: "id",
            title: <Text className={` ${classes.columnTitle} `}>#</Text>,
            width: 50,
            render: (record, idx) => <Text className={classes.columnAccessor}>{idx + 1}</Text>
          },
          {
            accessor: "fullName",
            title: <Text className={classes.columnTitle}>F.I.SH</Text>,
            render: record => <Text className={classes.columnAccessor}>{record.fullName}</Text>
          },
          {
            accessor: "degree",
            title: <Text className={classes.columnTitle}>TALBALIK TURI</Text>,
            render: record => <Text className={classes.columnAccessor}>{record.degree}</Text>
          },
          {
            accessor: "university",
            title: <Text className={classes.columnTitle}>OTM</Text>,
            render: record => <Text className={classes.columnAccessor}>{record.university}</Text>
          },
          {
            accessor: "tuitionFee",
            title: <Text className={classes.columnTitle}>AJRATILGAN SUMMA</Text>,
            render: record => (
              <Flex align="center" gap="3px" className={classes.columnAccessor}>
                {addSpacesToNumber(record.tuitionFee)}
                <Text className={classes.columnTitle}>UZS</Text>
              </Flex>
            )
          },
          {
            accessor: "phone",
            title: <Text className={classes.columnTitle}>TELFON RAQAM</Text>,
            render: record => <Text className={classes.columnAccessor}>{record.phone}</Text>
          },
          {
            accessor: "actions",
            title: <Text className={classes.columnTitle}>AMALLAR</Text>,
            render: record => <EyeBlue {...record} />
          }
        ]}
        totalRecords={count}
        recordsPerPage={10}
        page={page}
        onPageChange={p => setPage(p)}
      />
    </Box>
  );
};

export default Students;
