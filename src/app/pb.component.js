import template from './pb.html';
function HeroDetailController() {}
export const pbComponent = {
	template,
	controller: HeroDetailController,
	bindings: {
		hero: '='
	}
};
