import React from 'react'
import Header from '../Component/Header'
import Meta from '../Component/Meta'
import Breadcrumb from '../Component/Breadcrumb'
import Footer from '../Component/Footer'
import Container from './Container'

const About = () => {
  return (
    <div>
        <Meta title={"About"}/>
        <Header/>
        <Breadcrumb title='About'/>
        <Container class1="hw2 my-2 p-3">
          <div className="row">
            <div className="col-12 bg-white p-3 rounded">
              <h3>About</h3>
              <p className='text-muted'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, sequi modi! Quibusdam exercitationem beatae omnis molestias sit vel, similique dignissimos magnam, sapiente dolor temporibus nemo fugiat praesentium officiis labore aliquid. Quam, saepe nesciunt consequuntur repellat beatae molestiae accusamus id est voluptate sunt autem nemo dolorem alias dolor deleniti! Veritatis nemo voluptatum labore, deserunt alias distinctio autem laudantium aspernatur, commodi velit fuga. Impedit consequatur qui non sint placeat tempora, animi debitis minus nam veritatis optio blanditiis dolorum delectus labore assumenda? Inventore minus voluptates, magni natus necessitatibus veniam officiis placeat perferendis harum dignissimos tenetur possimus dolorem autem similique consectetur blanditiis dolore ut. Exercitationem cupiditate illum enim quia? Nobis, vitae fuga. Nemo maxime culpa ipsam! Quam, magni! Soluta modi vitae amet perferendis, autem ipsam necessitatibus impedit eveniet non dolorem tenetur facere quisquam eum fugit eligendi, explicabo, enim vel quaerat optio numquam praesentium perspiciatis ullam earum rerum. Autem esse quisquam nemo consectetur deleniti dolorem soluta delectus numquam possimus, provident et reprehenderit earum debitis culpa accusamus doloribus quidem mollitia eum sapiente! Laudantium ut temporibus, commodi quia ex esse, aperiam reprehenderit blanditiis quis omnis inventore tempora. In aut ipsam consequatur quibusdam inventore, mollitia officiis modi nesciunt aliquam enim laborum quas facere sint minima! Voluptatibus iste nobis explicabo magnam impedit accusantium recusandae, saepe fugit ad ea omnis, exercitationem odit tempora voluptates eligendi nulla minima! Neque itaque repellat cum, atque ratione id, distinctio magni iusto assumenda obcaecati cupiditate, earum hic ad accusamus. Ut voluptate magni tenetur exercitationem, dolores, necessitatibus minus sint fuga velit recusandae ea voluptatum molestias libero quo doloremque tempora officia eius! Sed nemo aliquid perferendis minima necessitatibus aliquam illum commodi eligendi quaerat dolor. Alias tempora nam quidem expedita, eius sunt harum ut dicta. Esse corporis eos officiis ea, ipsam, veniam doloribus voluptate quisquam totam eius dolor adipisci iste nisi amet nostrum rerum vel. Amet, eaque reprehenderit.
              </p>
            </div>
          </div>
        </Container>
        <Footer/>
    </div>
  )
}

export default About