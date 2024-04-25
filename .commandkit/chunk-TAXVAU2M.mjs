// src/schemas/welcomeSchema.ts
import { Schema, model } from "mongoose";
var welcomeSchema = new Schema({
  channelId: {
    type: String,
    required: true
  },
  guildId: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});
var welcomeSchema_default = model("welcome", welcomeSchema);

export {
  welcomeSchema_default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3NjaGVtYXMvd2VsY29tZVNjaGVtYS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgU2NoZW1hLCBtb2RlbCB9IGZyb20gJ21vbmdvb3NlJztcblxuY29uc3Qgd2VsY29tZVNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBjaGFubmVsSWQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIGd1aWxkSWQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIG1lc3NhZ2U6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbW9kZWwoJ3dlbGNvbWUnLCB3ZWxjb21lU2NoZW1hKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQSxTQUFTLFFBQVEsYUFBYTtBQUU5QixJQUFNLGdCQUFnQixJQUFJLE9BQU87QUFBQSxFQUMvQixXQUFXO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsRUFDWjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLEVBQ1o7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxFQUNaO0FBQ0YsQ0FBQztBQUVELElBQU8sd0JBQVEsTUFBTSxXQUFXLGFBQWE7IiwKICAibmFtZXMiOiBbXQp9Cg==