src - backend em node com typescript e prisma;

web - frontend web com react, vite e socket.io-client;

mobile - frontend mobile com react native, typescript e expo.

---

Instruções para rodar os projetos

---

1) Instalar o node na máquina;

2) Rodar o backend localmente em "src" com o comando "yarn dev" pelo terminal;

3) Rodar o frontend localmente em "web" com o comando "yarn dev".

4) Para rodar o projeto mobile deverá ser feito o seguinte:
> Instalar o Android Studio na máquina e o App "Expo Go" num dispositivo android;

> Iniciar o app Expo Go no dispositivo móvel;

> Rodar o projeto localmente em "mobile" com o comando "expo start";

> Instalar a fonte "roboto" por meio de "expo install expo-font @expo-google-fonts/roboto";

Obs: aconteceu um erro TS2786 no componente "button" ao inserir a tag <AntDesign /> que dizia o elemento não podia ser usado como um componente JSX. Tal erro foi resolvido a mudar a versão do @types/react no package.json, na raiz do projeto mobile. Mudando o "@types/react" de: "@types/react": "~17.0.21" para 
"@types/react": "17.0.44" e adicionando uma chave "resolutions" com o mesmo valor o problema foi resolvido após rodar um <i>yarn install</i>.

No projeto mobile, ao testar no dispositivo virtual (com emulador do Android Studio PIXEL_XL API 30), dará erro ao tentar login. Descrição: "No matching Activity!". Tentei arrumar esse erro, porém sem sucesso. O fluxo de login funciona normalmente num dispositivo físico... Notei também que algumas imagens não eram carregadas, e resulta em um warning (de key duplicada, possivelmente do elemento JSX Message, que é carregado dinamicamente) no console ao inserir uma nova mensagem.