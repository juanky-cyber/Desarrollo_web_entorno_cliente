export default function App() {
  return <ParentComponent />
}

function ParentComponent() {
  return (
    <>
      <UserComponent />
      <ProfileComponent />
      <FeedComponent />
    </>
  )
}

function UserComponent() {
  return <h2>User component</h2>
}

function ProfileComponent() {
  return <h2>Profile component</h2>
}

function FeedComponent() {
  return <h2>Feed component</h2>
}
