import React, { useState } from "react";
import './App.css';

const jogadores = {
  goleiros: [
    { id: 1, nome: 'Alisson Becker', imagem: 'https://s2.glbimg.com/B27GB5LJZtc7h3HCSuoI6jawAo8=/smart/e.glbimg.com/og/ed/f/original/2018/06/19/gettyimages-977938740edit.jpg' },
    { id: 2, nome: 'Ter Stegen', imagem: 'https://s2-ge.glbimg.com/nr-RW1b5JzZuX2y4YepNmgC8ZNA=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/Q/c/MVAKEDTKO069l5y34RGg/tr-stegen.png' },
    { id: 3, nome: 'Keylor Navas', imagem: 'https://s2-ge.glbimg.com/ySN_X_arlWvb-UCgczZvJh3kBrM=/0x151:2024x1810/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2017/X/h/Ycm8FDQMibGJavUNc3wQ/gettyimages-841697660.jpg' },
    { id: 21, nome: 'Rogerio Ceni', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJYUFWJy2dj1e3edOp979l8svniKuIYt9btw&s' },
    { id: 22, nome: 'Dida', imagem: 'https://terceirotempo.uol.com.br/imagens/57/75/w500_h140_qfl_fto_15775.webp' },
    { id: 23, nome: 'Buffon', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsJNdFKBN-bZx6sJN8JCVx9t257kRdqn0BiQ&s' },
  ],
  laterais: [
    { id: 4, nome: 'Trent Alexander-Arnold', imagem: 'https://s2-ge.glbimg.com/Q7KwfHi4RAUpNqKo3GUdiVU9VnY=/0x0:1024x722/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/V/h/HG1vSnQJm4Irthq8oqGQ/gettyimages-1657422730.jpg' },
    { id: 5, nome: 'Joshua Kimmich', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzabFiklfqW-tegoGZsHFNOstvQwa7Cy5C4g&s' },
    { id: 6, nome: 'David Alaba', imagem: 'https://s2-ge.glbimg.com/oT_CLQWCNEGfDfNBB_OkUlc_5go=/0x0:3500x2333/984x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2018/04/23/ap_18104647631001.jpg' },
    { id: 7, nome: 'Jordi Alba', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxnAhtx1IRhwDUfOpDFJqO_8YgMuHqBoHasQ&s' },

    
  ],
  zagueiros: [
    { id: 8, nome: 'Virgil van Dijk', imagem: 'https://lncimg.lance.com.br/cdn-cgi/image/width=828,quality=75,fit=pad,format=webp/uploads/2018/10/13/5bc256f3ef351.jpeg' },
    { id: 9, nome: 'Sergio Ramos', imagem: 'https://conteudo.imguol.com.br/c/esporte/b8/2020/07/02/sergio-ramos-comemora-seu-gol-pela-real-madrid-contra-o-getafe-1593729196170_v2_1920x1279.jpg' },
    { id: 10, nome: 'Raphaël Varane', imagem: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Rapha%C3%ABl_Varane_2018_%28cropped%29.jpg' },
    { id: 11, nome: 'Giorgio Chiellini', imagem: 'https://tmssl.akamaized.net//images/foto/galerie/giorgio-chiellini-bei-juventus-turin-2022-1652335801-85013.jpg?lm=1652335810' },
    { id: 24, nome: 'Thiago Silva', imagem: 'https://tmssl.akamaized.net/images/foto/galerie/thiago-silva-brazil-2022-1668946604-97005.jpg' },
    { id: 25, nome: 'Maldini', imagem: 'https://lendasdofutebol.com/wp-content/uploads/2021/04/paolo-maldini-350-x-260-optimized.jpg' },
    { id: 26, nome: 'John Terry', imagem: 'https://i0.wp.com/chelseabrasil.com/wp-content/uploads/2015/08/cD1kY2I2YTU2NjU3MGQ4OTdjMGQ2ODgyMWUyMjY3ZjAzMCZnPTM2MzU4YTk3MDQ1YjA1M2FhZmUxM2Y2NzYyZGRiZjNk.jpg?ssl=1' },
    { id: 27, nome: 'Rio Ferdinand', imagem: 'https://i.guim.co.uk/img/static/sys-images/Football/Pix/pictures/2009/5/22/1243022476455/Rio-Ferdinand-001.jpg?width=465&dpr=1&s=none&crop=none' }
  ],
  meioCampistas: [
    { id: 12, nome: 'Kevin De Bruyne', imagem: 'https://s2-ge.glbimg.com/9kJDOob3zGpMZRxxez8jkW6wQ68=/0x0:1415x1757/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/A/3/AXKKLjTPWAY8uL8XARPA/000-3242462.jpg' },
    { id: 13, nome: 'Luka Modrić', imagem: 'https://lncimg.lance.com.br/cdn-cgi/image/width=828,quality=75,fit=pad,format=webp/uploads/2024/04/AFP__20240110__34E833Y__v1__HighRes__FblKsaEspSuperCupRealMadridAtleticoMadrid-scaled-aspect-ratio-512-320.jpg' },
    { id: 14, nome: 'Frenkie de Jong', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlEGbBjwslPT_hgCCib94IYJ2pjh5ZeqJ0sw&s' },
    { id: 15, nome: 'Bruno Fernandes', imagem: 'https://tmssl.akamaized.net//images/foto/galerie/bruno-fernandes-portugal-2024-1718210778-139470.jpg?lm=1718210792' },
    { id: 16, nome: 'Garro', imagem: 'https://conteudo.imguol.com.br/c/esporte/42/2024/09/21/garro-do-corinthians-festeja-gol-marcado-sobre-o-atletico-go-em-duelo-do-campeonato-brasileiro-1726952054250_v2_450x600.jpg' },
    { id: 35, nome: 'Riquelme', imagem: 'https://imortaisdofutebol.com/wp-content/uploads/2018/01/1631847_640px.jpg' },
    { id: 36, nome: 'Rivaldo', imagem: 'https://imortaisdofutebol.com/wp-content/uploads/2021/09/rivaldo2002-e1650363076854.jpg' },
    { id: 37, nome: 'Ronaldinho Gaucho', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDhZbXS93bJHBPe_z_q7Ssjn3_n-l-Vyd08g&s' },
    { id: 38, nome: 'Gerrard', imagem: 'https://static.wikia.nocookie.net/liverpoolfc/images/d/db/Gerrard.jpg/revision/latest?cb=20210304151942' },
    { id: 39, nome: 'Pirlo', imagem: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKw-RPONEjwHOs9n-4fAOdQUzH8_7KencNZo3Ccje4nOflgXhrAiyIRqcipQ7EtslzatAbSR72hcNqZ75calmbsj2h8zQeRkMWiMhKxqdyySrbBIwuee9-TN3mHs9gHE9b-xAJVgsnsyYzJHy_BOA8hQeNA33Lpq_zcf0dMdlDJi_BxFi2BspxWklw_gGj/s533/WhatsApp%20Image%202024-05-17%20at%2008.42.41.jpeg' },
    { id: 40, nome: 'Gattuso', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyy_q6r-4fCigAvE3TWbBqyvVOuer-VEZLfA&s' },
    { id: 41, nome: 'Kaká', imagem: 'https://assets.goal.com/images/v3/blt16f9c20d6e97c294/22cf375a33d2b78acee811e057ff5ff3bb75da27.jpg?auto=webp&format=pjpg&width=3840&quality=60' },
  ],
  atacantes: [
    { id: 17, nome: 'Lionel Messi', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lionel-Messi-Argentina-2022-FIFA-World-Cup_sharpness.jpg/1200px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_sharpness.jpg' },
    { id: 18, nome: 'Cristiano Ronaldo', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuAS_3014M5UNK0FaIhG4WcZjBRddNDbYxnQ&s' },
    { id: 19, nome: 'Kylian Mbappé', imagem: 'https://veja.abril.com.br/wp-content/uploads/2023/07/GettyImages-1254687348.jpg?quality=70&strip=info&w=414&h=280&crop=1' },
    { id: 28, nome: 'Vinicius Jr', imagem: 'https://www.ofutebolero.com.br/_next/image?url=https%3A%2F%2Fwww.ofutebolero.com.br%2Fimage%2Fofutebolerocombr%2Fvinicius-junior-e-o-favorito-a-ganhar-o-premio-de-melhor-do-mundo-1733224820-hq.webp&w=3840&q=75' },
    { id: 29, nome: 'Ronaldo', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaal-_CHGyuDU4by9VmjuhdizAY5HzEwo8cA&s' },
    { id: 30, nome: 'Romario', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQF9fAoQwIz6YpZA-YdWW8TQK4gZh92eUMQ&s' },
    { id: 31, nome: 'Tevez', imagem: 'https://cdn.conmebol.com/wp-content/uploads/2015/03/carlos_tevez_2.jpg' },
    { id: 32, nome: 'Fernando Torres', imagem: 'https://premierleaguebrasil.com.br/wp-content/uploads/2019/06/fernando-torres-liverpool-premier-league-768x512.jpg' },
    { id: 33, nome: 'Yuri Alberto', imagem: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/07/yuri-alberto-corinthians.jpeg?w=1000' },
    { id: 34, nome: 'Gabigol', imagem: 'https://ds-images.bolavip.com/news/image/740/416/?src=https://images.somosfanaticos.fans/webp/br/full/SFBR_20241203_SFBR_452735_AGIF24060218094461-scaled-e1733242562947.webp' },
  ]
};

function App() {
  const [jogadoresSelecionados, setJogadoresSelecionados] = useState({
    goleiro: [],
    laterais: [],
    zagueiros: [],
    meioCampistas: [],
    atacantes: []
  });

  const sortearJogadores = () => {
    const jogadoresDisponiveis = {
      goleiros: [...jogadores.goleiros],
      laterais: [...jogadores.laterais],
      zagueiros: [...jogadores.zagueiros],
      meioCampistas: [...jogadores.meioCampistas],
      atacantes: [...jogadores.atacantes]
    };

    const sorteio = {
      goleiro: [],
      laterais: [],
      zagueiros: [],
      meioCampistas: [],
      atacantes: []
    };

    // Sorteia um goleiro
    const goleiroSorteado = Math.floor(Math.random() * jogadoresDisponiveis.goleiros.length);
    sorteio.goleiro.push(jogadoresDisponiveis.goleiros[goleiroSorteado]);
    jogadoresDisponiveis.goleiros.splice(goleiroSorteado, 1); // Remove o goleiro sorteado

    // Sorteia 2 laterais
    for (let i = 0; i < 2; i++) {
      const lateralSorteado = Math.floor(Math.random() * jogadoresDisponiveis.laterais.length);
      sorteio.laterais.push(jogadoresDisponiveis.laterais[lateralSorteado]);
      jogadoresDisponiveis.laterais.splice(lateralSorteado, 1);
    }

    // Sorteia 2 zagueiros
    for (let i = 0; i < 2; i++) {
      const zagueiroSorteado = Math.floor(Math.random() * jogadoresDisponiveis.zagueiros.length);
      sorteio.zagueiros.push(jogadoresDisponiveis.zagueiros[zagueiroSorteado]);
      jogadoresDisponiveis.zagueiros.splice(zagueiroSorteado, 1);
    }

    // Sorteia 3 meio-campistas
    for (let i = 0; i < 3; i++) {
      const meioCampistaSorteado = Math.floor(Math.random() * jogadoresDisponiveis.meioCampistas.length);
      sorteio.meioCampistas.push(jogadoresDisponiveis.meioCampistas[meioCampistaSorteado]);
      jogadoresDisponiveis.meioCampistas.splice(meioCampistaSorteado, 1);
    }

    // Sorteia 3 atacantes
    for (let i = 0; i < 3; i++) {
      const atacanteSorteado = Math.floor(Math.random() * jogadoresDisponiveis.atacantes.length);
      sorteio.atacantes.push(jogadoresDisponiveis.atacantes[atacanteSorteado]);
      jogadoresDisponiveis.atacantes.splice(atacanteSorteado, 1);
    }

    setJogadoresSelecionados(sorteio);
  };

  return (
    <div>
      <div className="header-tittle">
      <button onClick={sortearJogadores}>Sortear Jogadores</button>
      </div>
      <div className="campo-futebol">
        <div className="goleiro">
          {jogadoresSelecionados.goleiro.map(jogador => (
            <div key={jogador.id}>
              <img src={jogador.imagem} alt={jogador.nome} className="jogador-imagem" />
              {jogador.nome}
            </div>
          ))}
        </div>

        <div className="linha-laterais">
          {jogadoresSelecionados.laterais.map(jogador => (
            <div key={jogador.id} className="jogador">
              <img src={jogador.imagem} alt={jogador.nome} className="jogador-imagem" />
              {jogador.nome}
            </div>
          ))}
        </div>

        <div className="linha-zagueiros">
          {jogadoresSelecionados.zagueiros.map(jogador => (
            <div key={jogador.id} className="jogador">
              <img src={jogador.imagem} alt={jogador.nome} className="jogador-imagem" />
              {jogador.nome}
            </div>
          ))}
        </div>

        <div className="linha-meio-campistas">
          {jogadoresSelecionados.meioCampistas.map(jogador => (
            <div key={jogador.id} className="jogador">
              <img src={jogador.imagem} alt={jogador.nome} className="jogador-imagem" />
              {jogador.nome}
            </div>
          ))}
        </div>

        <div className="linha-atacantes">
          {jogadoresSelecionados.atacantes.map(jogador => (
            <div key={jogador.id} className="jogador">
              <img src={jogador.imagem} alt={jogador.nome} className="jogador-imagem" />
              {jogador.nome}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
