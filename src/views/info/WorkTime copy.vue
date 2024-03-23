<template>
    <ProfileNav></ProfileNav>
    <div class="container">
        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"
                style="width:100%">
                100%
            </div>
        </div>
    </div>
    <div class="container mt-3 mb-5">
        <h1>Add your Working Hours</h1>
        <p>Let your customers know when you are ppen for business.</p>
    </div>
    <div class="container">
        <p class="text-center">Select Days of the Week</p>
        <div class="d-flex justify-content-center flex-wrap">
            <div v-for="(week, index) in weeks" :key="index" class="week-container me-2 mb-4">
                <div class="d-flex flex-column align-items-center">
                    <div class="border rounded-circle d-flex justify-content-center align-items-center week-circle"
                        :class="{ active: isWeekSelected(index), 'bg-danger': week.isClosed, 'bg-warning': week.isYellowBg }"
                        @click="toggleModal(index)">
                        <small style="font-size: var(--x-small)" class="week-label truncate3">{{ week.shortLabel
                            }}</small>
                    </div>
                    <div class="modal " :class="{ show: selectedWeekIndex === index }" tabindex="-1" role="dialog">
                        <div class="modal-dialog modal-dialog-bottom" role="document">
                            <div class="modal-content">
                                <div class="modal-header py-1">
                                    <p class="modal-title mb-0 fw-bold">Select Time for {{ week.label }}</p>
                                    <button type="button" class="btn-close" @click="closeModal"></button>
                                </div>
                                <div class="modal-body px-2 py-1">
                                    <div style="font-size: var(--x-small);" class="d-flex justify-content-between">
                                        <div class="form-group mb-3">
                                            <label for="startDate" class="form-label">Select Start Time:</label>
                                            <input type="time" class="form-control" id="startDate"
                                                v-model="week.startDate" />
                                        </div>
                                        <div class="form-group mb-3">
                                            <label for="endDate" class="form-label">Select End Time:</label>
                                            <input type="time" class="form-control" id="endDate"
                                                v-model="week.endDate" />
                                        </div>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" v-model="allDaysSelected"
                                            @change="handleAllDaysSelection">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Select above Time to all days
                                        </label>
                                    </div>
                                    <div class="d-flex">
                                        <div class="btn-sm btn btn-danger w-100 me-2" @click="setClosed(index)">Closed
                                        </div>
                                        <div class="btn-sm btn btn-info w-100" @click="setTwentyFourHours(index)">24
                                            hours
                                        </div>
                                    </div>
                                    <button type="button" class=" mt-1 w-100 btn-sm btn btn-primary"
                                        @click="selectWeek(index)">Done</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProfileNav from '@/components/navbar/ProfileNav.vue';
export default {
    components: {
        ProfileNav
    },
    data() {
        return {
            weeks: [
                { shortLabel: "Mon", label: "Monday", startDate: "", endDate: "", isClosed: false, isYellowBg: false },
                { shortLabel: "Tue", label: "Tuesday", startDate: "", endDate: "", isClosed: false, isYellowBg: false },
                { shortLabel: "Wed", label: "Wednesday", startDate: "", endDate: "", isClosed: false, isYellowBg: false },
                { shortLabel: "Thu", label: "Thursday", startDate: "", endDate: "", isClosed: false, isYellowBg: false },
                { shortLabel: "Fri", label: "Friday", startDate: "", endDate: "", isClosed: false, isYellowBg: false },
                { shortLabel: "Sat", label: "Saturday", startDate: "", endDate: "", isClosed: false, isYellowBg: false },
                { shortLabel: "Sun", label: "Sunday", startDate: "", endDate: "", isClosed: false, isYellowBg: false },
            ],
            selectedWeekIndex: null,
        };
    },
    methods: {
        toggleModal(index) {
            this.selectedWeekIndex = index;
        },
        closeModal() {
            this.selectedWeekIndex = null;
        },
        selectWeek(selectedIndex) {
            const selectedWeek = this.weeks[selectedIndex];
            if (this.allDaysSelected) {
                for (let i = 0; i < this.weeks.length; i++) {
                    if (i !== selectedIndex) {
                        this.weeks[i].startDate = selectedWeek.startDate;
                        this.weeks[i].endDate = selectedWeek.endDate;
                    }
                }
            }
            this.selectedWeekIndex = null; // Close the modal
        },
        isWeekSelected(index) {
            const week = this.weeks[index];
            return week.startDate !== "" && week.endDate !== "" && !week.isClosed;
        },
        setClosed(index) {
            const week = this.weeks[index];
            week.isClosed = !week.isClosed;
            week.startDate = "00:00";
            week.endDate = "00:00";
        },
        setTwentyFourHours(index) {
            const week = this.weeks[index];
            if (week.startDate !== "00:00" || week.endDate !== "24:00") {
                week.startDate = "00:00";
                week.endDate = "24:00";
                week.isClosed = false;
                week.isYellowBg = true;
            } else {
                week.isYellowBg = false;
            }
        },

        handleAllDaysSelection() {
            if (this.allDaysSelected) {
                const selectedWeekIndex = this.selectedWeekIndex;
                const selectedWeek = this.weeks[selectedWeekIndex];
                for (let i = 0; i < this.weeks.length; i++) {
                    this.weeks[i].startDate = selectedWeek.startDate;
                    this.weeks[i].endDate = selectedWeek.endDate;
                }
            }
        },

        updateDayTime(index) {
            this.selectedWeekIndex = index;
            this.allDaysSelected = false;
        }
    },
    computed: {
        computed: {
            allDaysSelected: {
                get() {
                    return this.selectedWeekIndex !== null && this.weeks.every((week, index) => index !== this.selectedWeekIndex || (week.startDate === this.weeks[this.selectedWeekIndex].startDate && week.endDate === this.weeks[this.selectedWeekIndex].endDate));
                },
                set(value) {
                    if (!value) { 
                        return;
                    }

                    const selectedWeekIndex = this.selectedWeekIndex;
                    const selectedWeek = this.weeks[selectedWeekIndex];
                    for (let i = 0; i < this.weeks.length; i++) {
                        this.weeks[i].startDate = selectedWeek.startDate;
                        this.weeks[i].endDate = selectedWeek.endDate;
                    }
                }
            }
        }
    }

};
</script>

<style scoped>
.week-container {
    position: relative;
}

.week-circle {
    width: 35px;
    height: 35px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.week-label {
    font-weight: bold;
}

.active {
    background-color: #007bff;
    color: #fff;
}

.modal {
    display: none;
    position: fixed;
    z-index: 1050;
    left: 0;
    top: 350px;
    width: 100%;
    overflow: hidden;
    outline: 0;
    animation: slideUp 0.3s ease-in-out;
}

.modal.show {
    display: block;
}

@keyframes slideUp {
    0% {
        transform: translateY(100%);
    }

    100% {
        transform: translateY(0);
    }
}
</style>