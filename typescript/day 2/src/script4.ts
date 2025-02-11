
type SystemUser = {
    id: number;
    name: string;
    email: string;
    password: string;
  }
    
  type PublicUser = Omit <SystemUser , "password">;  
  
  
  const publicUser : PublicUser = {
      id: 1,
      name: "John",
      email: "john@example.com",
  }