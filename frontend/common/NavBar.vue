<template>
	<nav :class="['navbar', {vertical}]">
		<div :class="['container', {'is-fullwidth': fullwidth}]">
			<div class="navbar-brand mr-20">
				<a href="/"><img :src="logo" class="image pt-10 pb-10 pl-10 pr-10" style="height: 64px;"/></a>
				<a
					@click="expanded = !expanded"
					role="button"
					:class="['navbar-burger', {'is-active': expanded}]"
					aria-label="menu"
					:aria-expanded="expanded"
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>
			<div :class="['navbar-menu', {'is-active': expanded}]">
				<div class="navbar-start">
					<nav-bar-link
						v-for="route in namedRoutes"
						:key="route.path"
						:route="route"
					/>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
import NavBarLink from './NavBarLink';
import logo from '../../img/awards2020.png';

export default {
	components: {
		NavBarLink,
	},
	props: {
		routes: Array,
		fullwidth: Boolean,
		vertical: Boolean,
	},
	data () {
		return {
			expanded: false,
			logo,
		};
	},
	computed: {
		namedRoutes () {
			return this.routes.filter(route => route.name);
		},
	},
};
</script>

<style lang="scss">
.navbar-user-avatar {
	margin-right: 10px;
	border-radius: 5px;
}
.navbar > .container.is-fullwidth {
	max-width: none;
	flex-basis: calc(100% - 1.5rem);
	flex-grow: 0;
}
</style>
