import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import SalesNotifications from './components/SalesNotifications'
import BackgroundDecor from './components/BackgroundDecor'
import LandingPage from './LandingPage'
import PolicyPage from './PolicyPage'

// Helper to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <BackgroundDecor />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          
          <Route path="/politica-de-privacidade" element={
            <PolicyPage 
              title="Política de Privacidade" 
              content={
                <>
                  <p>Sua privacidade é importante para nós. É política do Diego Abrantes respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Diego Abrantes, e outros sites que possuímos e operamos.</p>
                  <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>
                  <h2>Coleta de Dados</h2>
                  <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>
                  <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>
                  <h2>Compromisso do Usuário</h2>
                  <p>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Diego Abrantes oferece no site e com caráter enunciativo, mas não limitativo:</p>
                  <ul>
                    <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
                    <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de sorte ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
                    <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Diego Abrantes, de seus fornecedores ou terceiros.</li>
                  </ul>
                </>
              } 
            />
          } />

          <Route path="/termos-de-uso" element={
            <PolicyPage 
              title="Termos de Uso" 
              content={
                <>
                  <h2>1. Termos</h2>
                  <p>Ao acessar ao site Diego Abrantes, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site.</p>
                  <h2>2. Uso de Licença</h2>
                  <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Diego Abrantes , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título.</p>
                  <h2>3. Isenção de responsabilidade</h2>
                  <p>Os materiais no site da Diego Abrantes são fornecidos 'como estão'. Diego Abrantes não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</p>
                </>
              } 
            />
          } />

          <Route path="/politica-de-reembolso" element={
            <PolicyPage 
              title="Política de Reembolso" 
              content={
                <>
                  <p>Nossa política de reembolso foi criada para garantir a transparência e a satisfação de nossos clientes.</p>
                  <h2>Garantia Incondicional</h2>
                  <p>Como mencionado em nossa seção de garantia, oferecemos 15 dias para ajustes finos após a entrega do projeto. Caso o serviço não atenda às especificações técnicas acordadas inicialmente, buscaremos a solução imediata.</p>
                  <h2>Cancelamento de Projeto</h2>
                  <p>Por se tratar de um serviço personalizado e artesanal (desenvolvimento de software e design), uma vez iniciado o processo de criação e aprovado o layout inicial, o reembolso integral não é aplicável devido às horas de trabalho já empenhadas.</p>
                </>
              } 
            />
          } />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <SalesNotifications />
    </Router>
  )
}

export default App
