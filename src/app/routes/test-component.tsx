export default function TestComponent() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center" data-testid="test-component">
        <h1 className="text-4xl font-bold mb-4">Test Component Loaded Successfully</h1>
        <p className="text-xl text-gray-600">The Remix dev server is running and rendering components correctly.</p>
      </div>
    </div>
  );
}
