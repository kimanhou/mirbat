import Api from "../network/api/Api";

class ProjectController {
    get = () => {
        return Api.projects.get();
    }
}
export default new ProjectController();