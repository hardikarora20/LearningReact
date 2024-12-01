import { ProfileCard } from "./ProfileCard";

export const Profile = () => {
  return (
    <ProfileCard name="thapa" age={21} greeting="hey there">
      <p>hobbies: dancing, gaming</p>
      <button>contact</button>
    </ProfileCard>
  );
};
