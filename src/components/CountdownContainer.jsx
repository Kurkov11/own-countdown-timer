import Countdown from "./Countdown";
import CountdownMenu from "./CountdownMenu";
export default function CountdownContainer() {
  return (
    <div id="countdown-container">
      <Countdown></Countdown>
      <CountdownMenu></CountdownMenu>
    </div>
  );
}
