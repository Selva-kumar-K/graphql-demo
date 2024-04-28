import './App.css'
import { useQuery,gql } from '@apollo/client'
function App() {

  const GET_ALL_COURSES = gql`
    query Query {
      courses {
        id
        name
        description
        price
        discount
      }
}
    `

  const {loading, error,data} = useQuery(GET_ALL_COURSES)

  if(error) return <p>Error found</p>
  if(loading) return <h2>Loading..</h2>

  return (
    <>
      <div>
        <h2>Hello GraphQL</h2>
        {data.courses.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </div>
    </>
  )
}

export default App
