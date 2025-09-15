// export const getStaticPaths = async () => {
//   const res = await fetch("http://localhost:3000/api/hello")
//   const data = await res.json();

//   const paths = data.map(hello => {
//     return {
//       params: { id: hello.id.toString() }
//     }
//   })

//   return {
//     paths,
//     fallback: false
//   }
// }

// export const getStaticProps = async (context) => {
//   const id = context.params.id;
//   const res = await fetch("http://localhost:3000/api/hello/" + id);
//   const data = await res.json();

//   return {
//     props: { hello: data }
//   }
// }

const Details = () => {
  return ( 
    <div>
      <h1>Details Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
    </div>
   );
}
 
export default Details;