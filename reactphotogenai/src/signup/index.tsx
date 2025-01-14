import { component$ } from '@builder.io/qwik';
import NewComponent from './NewComponent'; // Import the new component

export default component$(() => {
  return (
    <div className="h-full">
      <NewComponent /> {/* Render the new component here */}
    </div>
  );
}); 