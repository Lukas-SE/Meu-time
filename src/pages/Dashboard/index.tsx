import { useAuth } from "../../contexts/auth";
import ButtonText from "../../components/ButtonText/ButtonText";

export default function Dashboard() {
  const { logout } = useAuth();

  function handleLogout() {
    logout();
  }
  return (
    <>
      <div className="flex">
        <ButtonText action={handleLogout}>Logout</ButtonText>
      </div>
    </>
  );
}
