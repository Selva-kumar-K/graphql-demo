const {ApolloServer, gql} = require('apollo-server')

const allCourses = [
    {
        id : "1",
        name : "Python",
        description : "Master python in one week",
        price : 320.54,
        discount : false
    },
    {
        id : "2",
        name : "Next js",
        description : "Master python in one week",
        price : 320.54,
        discount : false
    },
    {
        id : "3",
        name : "GraphQL",
        description : "Master python in one week",
        price : 320.54,
        discount : false
    },
    {
        id : "4",
        name : "React",
        description : "Master python in one week",
        price : 320.54,
        discount : false
    }
]

const typeDefs = gql`
    type Query{
        welcome : String
        courses : [Course!]!
        course(id: ID!) : Course!
    }
    
    type Course{
        id : ID!
        name : String!
        description : String!
        price : Float!
        discount : Boolean!
    }`

const resolvers = {
    Query : {
        welcome : () => {
            return 'Welcome to the world of GraphQL'
        },

        courses : () => {
            return allCourses
        },

        course : (parent, args, context) => {
            const {id} = args
            const data = allCourses.find(course => course.id === id)
            if(!data) return null 
            return data
        }

    }
}


const server = new ApolloServer({typeDefs, resolvers, cors: {
    origin: ["http://localhost:5173", "https://studio.apollographql.com"],
    credentials : true
  },
  })


server.listen().then(({url}) => console.log(`Server is listening on the port no ${url}`))