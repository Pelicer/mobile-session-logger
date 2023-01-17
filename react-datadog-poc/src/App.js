import './App.css';
import { datadogRum } from '@datadog/browser-rum';
import { datadogLogs } from '@datadog/browser-logs'

function App() {

  datadogRum.init({
    applicationId: 'b3efbd79-7fe4-4d1d-b0c1-e3194ebf9db8',
    clientToken: 'pub7bf2be24c92478a03cd967daab76fd14',
    site: 'datadoghq.eu',
    service:'react-datadog-poc',
    env:'dev',
    version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100,
    trackUserInteractions: true,
    forwardErrorsToLogs: true,
    trackFrustrations: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel:'allow'
  });
  
  datadogLogs.init({
      clientToken: 'pub7bf2be24c92478a03cd967daab76fd14',
      site: 'datadoghq.eu',
      forwardErrorsToLogs: true,
      forwardConsoleLogs: "all",
      forwardReports: "all",
        sessionSampleRate: 100
  });
  datadogRum.startSessionReplayRecording();

  return (
    <div className="App">
      <button onClick={(e) => {
        document.getElementById("feedback").textContent = "I was changed by the button click because datadog only recognizes as clicks events that change the DOM or trigger network requests"
        console.log(`I'm comming from a button click, these are my properties: ${e}`)
        console.log(e)
      }}>I'm an action button</button>
      <button onClick={() => {
        document.getElementById("feedback").textContent = "Any unhandled throw, however, is automatically gathered"
        throw "I'm an error throw from a button click"
      }}>I'm an error button</button>
      <p id="feedback"></p>
    </div>
  );
}

export default App;
