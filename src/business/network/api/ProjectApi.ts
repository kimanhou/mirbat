import { get } from "../JsonApiEndpoint";
import Project from "../../../model/Project";
import { arrayHandler } from "../../../model/deserialization/DeserializationUtils";

export const PROJECT_API_ENDPOINT = "/mirbat/projects.json";

const ProjectApi = {
    get : get(PROJECT_API_ENDPOINT, arrayHandler(Project.deserialize)),
}
export default ProjectApi;