
var {buildSchema} = require('graphql');
var { GraphQLScalarType, Kind } = require('graphql');

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});
 


var schema = buildSchema(`
    scalar Date
    type ID{
        id: String!
    }
    type AdminItem{
        name: String
        phone: String
        email: String
        password: String
        status: Boolean
        date: Date
    }
    type Query {
        Admin: AdminItem
        Admins: [AdminItem]
        GetAdminById(id: ID): AdminItem
        GetAdminByStatus(status: Boolean): [AdminItem]
        GetAdminByPhone(phone: String): AdminItem
        GetAdminByEmail(email: String): AdminItem
    }
    input AdminInput{
        name: String
        phone: String
        email: String
        password: String
        status: Boolean
        date: Date
    }
    input AdminUpdateInput{
        id: ID
        name: String
        phone: String
        email: String
        password: String
        status: Boolean
        date: Date
    }
    type Mutation{
        createAdmin(input: AdminInput): AdminItem
        updateAdmin(input: AdminUpdateInput): AdminItem
    }
`);

module.exports = schema;