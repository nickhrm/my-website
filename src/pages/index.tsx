import Header from "@/components/Header";
import Project from "@/components/projects/ProjectModel";
import Projects from "@/components/projects/Projects";


export default function Home(props: any) {

  const projects: Project[] = Project.fromJSONList(props);

  

  return (
    <main className=''>
    <Header></Header>
    <Projects {...projects}> </Projects>
    </main>
  )
}




export async function getStaticProps() {

  const token = "1d8df6e8577e0429e37a5d63866cc8d19a4ce12072dcf4e4a8fb1bc1ae531f23597171a7c8d091e31af921b6f19d66baa2611a6ce55fab6ee31a9fb8c349b29efc8a8a1e40f01d6094ab8914a85973f2c38dc60593e54ad15a83db1d7033ca2b316049edfed697a035f2e5b1354db1d667ed3192a253a0b011bbe1c69229c895";


    const url = "http://localhost:1337/api/projects"



    // Get external data from the file system, API, DB, etc.
    const data = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + token
      }
    })
  
    // The value of the `props` key will be
    //  passed to the `Home` component

    console.dir(data, {depth: null})
    return {
      props: data
    }
  }
