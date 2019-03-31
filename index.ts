require( 'dotenv' ).config()
import server from "./server";

const port = process.env.PORT || 5000;
server.listen( port, () =>
    console.log( `\n** API running on http://localhost:${ port } **\n` )
);