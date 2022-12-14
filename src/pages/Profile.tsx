import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Post from "../components/Post";
import UserDetails from "../components/UserDetails";
// arquivo json só para testes:
import faker from '../assets/faker.json'
import { mapToStyles } from "@popperjs/core/lib/modifiers/computeStyles";
import NoPost from "../components/NoPost";


type ProfileProps = {}


const Profile = (props: ProfileProps) => {

  const { vizinhos } = faker

  const { id } = useParams()

  // Para filtrar apenas os dados do usuário do id
  const usuarios = vizinhos.filter(vizinho => vizinho.id === Number(id))
  console.log()

  //Para somar o número de posts do usuário
  const soma = usuarios.length

  //Acessar apenas o primeiro index para pegar os dados
  const data = usuarios[0]

  console.log(usuarios)

  return (
    <>
      <NavBar />

      <UserDetails nome={data.nome} apartment={data.apartment} email={data.email} id={Number(id)} posts={soma} />

      {/* Caso o número de posts for maior do que zero rá renderizar todos os posts. Se for 0 irá renderizar o componente de NoPost*/}

      {soma > 0 ? (
          <>
            {usuarios.map((usuario) => (
            <Post key={id} id={Number(id)} nome={usuario.nome} timestamp={usuario.timestamp} apartment={usuario.apartment} post={usuario.post} />))}
          </>
        ) :
           <>
            <NoPost/>
           </>
      }
    </>
  )
}

export default Profile
