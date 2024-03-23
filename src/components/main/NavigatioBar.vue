<template>
    <div v-if="showNav">
        <div class="nav-container">
            <div class="nav">
                <TopNav></TopNav>
            </div>
            <nav ref="navBar">
                <div class="nav-scroll">
                    <ul class="px-3">
                        <li v-for="section in sections" :key="section.id" class="my-3">
                            <a class=" " :class="{ 'active': activeTab === section.id }"
                                @click="scrollToSection(section.id)">{{ section.name }}</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    <nav v-else ref="navBar">
        <div class="nav-scroll">
            <ul class="px-3">
                <li v-for="section in sections" :key="section.id" class="my-3">
                    <a class="border rounded-3" :class="{ 'active': activeTab === section.id }"
                        @click="scrollToSection(section.id)">{{ section.name }}</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import TopNav from '@/components/aboutComp/TopNav.vue';

export default {
    components: {
        TopNav
    },
    props: {
        showNav: Boolean,
        activeTab: String,
        sections: Array
    },

    mounted() {
        this.observer = new IntersectionObserver(this.handleIntersection, {
            rootMargin: '0px 0px -50% 0px',
        });
        this.sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) {
                this.observer.observe(el);
            }
        });
    },
    beforeUnmount() {
        if (this.observer) {
            this.observer.disconnect();
        }
    },
    methods: {
        handleIntersection(entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.$emit('update-active-tab', entry.target.id);
                }
            });
        },
        scrollToSection(sectionId) {
            const el = document.getElementById(sectionId);
            if (el) {
                window.scrollTo({
                    top: el.offsetTop - 160,
                    behavior: 'smooth'
                });
                this.$emit('update-active-tab', sectionId);
            }
        }

    }
};
</script>

<style scoped>
.nav-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: #f8f8f8;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    /* Add shadow */
}

.nav {
    position: sticky;
    top: 0;
    z-index: 999;
    background-color: #f8f8f8;
}

.nav-scroll {
    overflow-x: auto;
    white-space: nowrap;
    scrollbar-width: none;
    /* Remove scrollbar */
    -ms-overflow-style: none;
    /* Remove scrollbar in IE */
}

.nav-scroll::-webkit-scrollbar {
    display: none;
    /* Remove scrollbar in WebKit browsers */
}

ul.px-3 {
    border: none;
    display: inline-block;
    margin: 0;
    padding: 0;
    list-style-type: none;
}

nav ul {
    border: none;
    margin: 0;
    padding: 0;
}

nav li {
    border: none;
    display: inline-block;
    margin-right: 20px;
}

nav a {
    border: none;
    text-decoration: none;
    color: #333;
    padding: 10px;
}

.active {
    border: none;
    border-bottom: 3px solid #000;
    /* background-color: rgba(0, 255, 255, 0.349); */
    color: #000;
    font-weight: bold;
}
</style>
