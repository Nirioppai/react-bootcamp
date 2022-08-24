import { React, useState } from 'react';

export default function ToggleState() {
  const [isToggled, setIsToggled] = useState(false);
  const toggle = () => setIsToggled(!isToggled);

  return (
    <div>
      <div>Toggled State: {isToggled ? 'Close' : 'Open'}</div>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
