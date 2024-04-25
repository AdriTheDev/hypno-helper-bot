import "../../chunk-LJIZ45IO.mjs";
import {
  __name
} from "../../chunk-G5GHKT7C.mjs";

// src/events/ready/connectMongo.ts
import { connect } from "mongoose";
function connectMongo_default(c, client, handler) {
  const { MONGODB_URI } = process.env;
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI not found in .env file");
  }
  connect(MONGODB_URI).then(() => console.log("Connected to MongoDB")).catch((err) => console.log(err));
}
__name(connectMongo_default, "default");
export {
  connectMongo_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2V2ZW50cy9yZWFkeS9jb25uZWN0TW9uZ28udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB0eXBlIHsgQ2xpZW50IH0gZnJvbSAnZGlzY29yZC5qcyc7XG5pbXBvcnQgdHlwZSB7IENvbW1hbmRLaXQgfSBmcm9tICdjb21tYW5ka2l0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdtb25nb29zZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjOiBDbGllbnQ8dHJ1ZT4sIGNsaWVudDogQ2xpZW50PHRydWU+LCBoYW5kbGVyOiBDb21tYW5kS2l0KSB7XG4gIGNvbnN0IHsgTU9OR09EQl9VUkkgfSA9IHByb2Nlc3MuZW52O1xuXG4gIGlmICghTU9OR09EQl9VUkkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01PTkdPREJfVVJJIG5vdCBmb3VuZCBpbiAuZW52IGZpbGUnKTtcbiAgfVxuXG4gIGNvbm5lY3QoTU9OR09EQl9VUkkpXG4gICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBNb25nb0RCJykpXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7O0FBRUEsU0FBUyxlQUFlO0FBRVQsU0FBUixxQkFBa0IsR0FBaUIsUUFBc0IsU0FBcUI7QUFDbkYsUUFBTSxFQUFFLFlBQVksSUFBSSxRQUFRO0FBRWhDLE1BQUksQ0FBQyxhQUFhO0FBQ2hCLFVBQU0sSUFBSSxNQUFNLG9DQUFvQztBQUFBLEVBQ3REO0FBRUEsVUFBUSxXQUFXLEVBQ2hCLEtBQUssTUFBTSxRQUFRLElBQUksc0JBQXNCLENBQUMsRUFDOUMsTUFBTSxDQUFDLFFBQVEsUUFBUSxJQUFJLEdBQUcsQ0FBQztBQUNwQztBQVZPOyIsCiAgIm5hbWVzIjogW10KfQo=