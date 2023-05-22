
import { AuthProvider } from "./contexts/auth";
import TeamRoutes from "./routes";

function App() {
  return (
    <AuthProvider>
      <TeamRoutes />
    </AuthProvider>
  );
}

export default App;
