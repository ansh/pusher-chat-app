import Pusher from "pusher";


export const pusher = new Pusher({
  appId: "1375947",
  key: "85ff809716f19d097dda",
  secret: "32f07d983d4429c5368e",
  cluster: "us3",
  useTLS: true,
});