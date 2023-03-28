import './App.css';
import Introduction from './components/Introduction'
import Sourcefilebasics from './components/Sourcefilebasics'
import Sourcefilestructure from './components/Source_file_structure'
import Formatting from './components/Formatting'
import Languagefeatures from './components/Language_features'
import Naming from './components/Naming'
import JSDoc from './components/JSDoc'
import Policies from './components/Policies'
import Appendices from './components/Appendices'
import Nexlesoftcustom from './components/Nexlesoft_custom'
import IntroductionDetail from './components/introduction-detail';
function App() {
  return (
    <div className="App">
    <h1>JavaScript Style Guide</h1>
      <div id="tocDiv" className='vertical_toc'>
      <div class="toc_title"></div>
      <h3 class="ignoreLink" id="toc">Table of Contents</h3>
      <table className='columns'>
        <tbody valign="top" className='toc'>
          <tr>
            <td className='two_columns'>
              <Introduction/>
              <Sourcefilebasics/>
              <Sourcefilestructure/>
              <Formatting/>
              <Languagefeatures/>
              <Naming/>
              <JSDoc/>
              <Policies/>
              <Appendices/>
              <Nexlesoftcustom/>
            </td>
          </tr>
        </tbody>

      </table>
    </div>
    <IntroductionDetail />
  </div>
  
  );
}

export default App;
