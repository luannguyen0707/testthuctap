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
import Sourcefilebasicsdetail from './components/Sourcefilebasics-detail';
import Sourcefilestructuredetail from './components/Source-file-structure-detail';
import Formattingdetail from './components/Formatting-detail';
import Languagefeaturesdetail from './components/Language_features-detail';
import Namingdetail from './components/Naming-detail';
import JSDocdetail from './components/JSDoc-detail';
import Policiesdetail from './components/Policies-detail';
import Appendicesdetail from './components/Appendices-detail';
import Nexlesoftcustomdetail from './components/Nexlesoft_custom-detail';
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
    <Sourcefilebasicsdetail/>
    <Sourcefilestructuredetail/>
    <Formattingdetail/>
    <Languagefeaturesdetail/>
    <Namingdetail/>
    <JSDocdetail/>
    <Policiesdetail/>
    <Appendicesdetail/>
    <Nexlesoftcustomdetail/>
  </div>
  
  );
}

export default App;
