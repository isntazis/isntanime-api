import { app, port } from "@/app";
import { logging } from "@utils/logging";

// createApp function that return app instance
export const createApp = () => {
  return app;
};

// servet listening
createApp().listen(port, () => {
  logging.info(`Server listening at http://localhost:${port}`);
});
