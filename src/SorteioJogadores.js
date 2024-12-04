import React, { useState } from "react";
import './App.css';

const jogadores = {
  goleiros: [
    { id: 1, nome: 'Alisson Becker', imagem: 'https://s2.glbimg.com/B27GB5LJZtc7h3HCSuoI6jawAo8=/smart/e.glbimg.com/og/ed/f/original/2018/06/19/gettyimages-977938740edit.jpg' },
    { id: 2, nome: 'Ter Stegen', imagem: 'https://s2-ge.glbimg.com/nr-RW1b5JzZuX2y4YepNmgC8ZNA=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/Q/c/MVAKEDTKO069l5y34RGg/tr-stegen.png' },
    { id: 3, nome: 'Keylor Navas', imagem: 'https://s2-ge.glbimg.com/ySN_X_arlWvb-UCgczZvJh3kBrM=/0x151:2024x1810/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2017/X/h/Ycm8FDQMibGJavUNc3wQ/gettyimages-841697660.jpg' }
  ],
  laterais: [
    { id: 4, nome: 'Trent Alexander-Arnold', imagem: 'https://s2-ge.glbimg.com/Q7KwfHi4RAUpNqKo3GUdiVU9VnY=/0x0:1024x722/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/V/h/HG1vSnQJm4Irthq8oqGQ/gettyimages-1657422730.jpg' },
    { id: 5, nome: 'Joshua Kimmich', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzabFiklfqW-tegoGZsHFNOstvQwa7Cy5C4g&s' },
    { id: 6, nome: 'David Alaba', imagem: 'https://s2-ge.glbimg.com/oT_CLQWCNEGfDfNBB_OkUlc_5go=/0x0:3500x2333/984x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2018/04/23/ap_18104647631001.jpg' },
    { id: 7, nome: 'Jordi Alba', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxnAhtx1IRhwDUfOpDFJqO_8YgMuHqBoHasQ&s' }
  ],
  zagueiros: [
    { id: 8, nome: 'Virgil van Dijk', imagem: 'https://lncimg.lance.com.br/cdn-cgi/image/width=828,quality=75,fit=pad,format=webp/uploads/2018/10/13/5bc256f3ef351.jpeg' },
    { id: 9, nome: 'Sergio Ramos', imagem: 'https://conteudo.imguol.com.br/c/esporte/b8/2020/07/02/sergio-ramos-comemora-seu-gol-pela-real-madrid-contra-o-getafe-1593729196170_v2_1920x1279.jpg' },
    { id: 10, nome: 'Raphaël Varane', imagem: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Rapha%C3%ABl_Varane_2018_%28cropped%29.jpg' },
    { id: 11, nome: 'Giorgio Chiellini', imagem: 'https://tmssl.akamaized.net//images/foto/galerie/giorgio-chiellini-bei-juventus-turin-2022-1652335801-85013.jpg?lm=1652335810' }
  ],
  meioCampistas: [
    { id: 12, nome: 'Kevin De Bruyne', imagem: 'https://s2-ge.glbimg.com/9kJDOob3zGpMZRxxez8jkW6wQ68=/0x0:1415x1757/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/A/3/AXKKLjTPWAY8uL8XARPA/000-3242462.jpg' },
    { id: 13, nome: 'Luka Modrić', imagem: 'https://lncimg.lance.com.br/cdn-cgi/image/width=828,quality=75,fit=pad,format=webp/uploads/2024/04/AFP__20240110__34E833Y__v1__HighRes__FblKsaEspSuperCupRealMadridAtleticoMadrid-scaled-aspect-ratio-512-320.jpg' },
    { id: 14, nome: 'Frenkie de Jong', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlEGbBjwslPT_hgCCib94IYJ2pjh5ZeqJ0sw&s' },
    { id: 15, nome: 'Bruno Fernandes', imagem: 'https://tmssl.akamaized.net//images/foto/galerie/bruno-fernandes-portugal-2024-1718210778-139470.jpg?lm=1718210792' },
    { id: 16, nome: 'Garro', imagem: 'https://conteudo.imguol.com.br/c/esporte/42/2024/09/21/garro-do-corinthians-festeja-gol-marcado-sobre-o-atletico-go-em-duelo-do-campeonato-brasileiro-1726952054250_v2_450x600.jpg' }
  ],
  atacantes: [
    { id: 17, nome: 'Lionel Messi', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lionel-Messi-Argentina-2022-FIFA-World-Cup_sharpness.jpg/1200px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_sharpness.jpg' },
    { id: 18, nome: 'Cristiano Ronaldo', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuAS_3014M5UNK0FaIhG4WcZjBRddNDbYxnQ&s' },
    { id: 19, nome: 'Kylian Mbappé', imagem: 'https://veja.abril.com.br/wp-content/uploads/2023/07/GettyImages-1254687348.jpg?quality=70&strip=info&w=414&h=280&crop=1' },
    { id: 20, nome: 'Vinicius Jr', imagem: 'https://www.ofutebolero.com.br/_next/image?url=https%3A%2F%2Fwww.ofutebolero.com.br%2Fimage%2Fofutebolerocombr%2Fvinicius-junior-e-o-favorito-a-ganhar-o-premio-de-melhor-do-mundo-1733224820-hq.webp&w=3840&q=75' }
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
      <h1>Sorteio de Jogadores - Formação 4-3-3</h1>
      <button onClick={sortearJogadores}>Sortear Jogadores</button>

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
