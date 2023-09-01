
import { useParams } from "react-router-dom";

import { useStudentsSingle } from "modules/dashboard/hooks";

interface SingleProps {}

const Single = (props: SingleProps) => {
  const { studentID } = useParams<{ studentID: string }>();
  const { count, students, isLoading } = useStudentsSingle({ id: +studentID! });

  console.log(students)

  return <h1>Single Student: {studentID}</h1>;
};

export default Single;
