<template>
    <ProfileNav></ProfileNav>
    <div class="container mt-3">
        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"
                style="width:100%">
                100%
            </div>
        </div>
    </div>
    <div class="container mt-3  ">
        <p class="fs-5 text-center">Work Timing</p >
    </div>
    <div class="container">
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header d-flex align-items-center ">
                    <div class="btn-group w-100 rounded-2 bg-light" role="group"
                        aria-label="Basic radio toggle button group">
                        <div class="d-flex align-items-center border-bottom" data-bs-toggle="collapse"
                            data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            <i class="bi bi-plus px-o m-1"></i>
                        </div>
                        <div class="accordion-button bg-light " data-bs-toggle="collapse" data-bs-target="#collapseOne"
                            aria-expanded="true" aria-controls="collapseOne">
                            Working Hours
                        </div>
                    </div>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="collapse show" id="collapseExample">
                            <div class="card card-body">
                                <div style="font-size: var(--x-small);" class="d-flex justify-content-between">
                                    <div class="form-group mb-3">
                                        <label for="startDate" class="form-label">Select Start Time:</label>
                                        <input type="time" class="form-control" id="startDate" />
                                    </div>
                                    <div class="d-flex flex-column">
                                        <button class="btn btn-sm btn-warning my-1" @click="setTwentyFourHours()"
                                            style="font-size: var(--x-small);">24 hrs</button>
                                        <button class="btn btn-sm btn-danger my-1" @click="setClosed(6)"
                                            style="font-size: var(--x-small);">Close</button>
                                    </div>
                                    <div class="form-group mb-3">
                                        <label for="endDate" class="form-label">Select End Time:</label>
                                        <input type="time" class="form-control" id="endDate" />
                                    </div>
                                </div>
                                <div class="d-flex flex-wrap justify-content-between">
                                    <div v-for="(week, index) in weeks" :key="index">
                                        <div class="d-flex border rounded p-2"
                                            :class="{ 'bg-primary': isSelected(index) && !isWeekDisabled(index), 'text-white': isSelected(index) && !isWeekDisabled(index), 'bg-warning': isWeekDisabled(index) }"
                                            @click="toggleSelection(index)">
                                            <small style="font-size: var(--x-small)" class="week-label truncate3">{{
                                            week.shortLabel
                                        }}</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-check my-2">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                                        @change="handleAllDaysSelection">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        All Days
                                    </label>
                                </div>

                                <div class="d-flex mt-2">
                                    <button @click="handleSubmit" class="btn btn-primary w-100 mx-1">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container mt-3">
                        <h2>Selected Weeks:</h2>
                        <div v-if="selectedWeeks.length > 0">
                            <div v-for="(week, index) in selectedWeeks" :key="index" class="card card-body">
                                <div class="d-flex justify-content-between">
                                    <p v-if="week.isClosed">This day is closed.</p>
                                    <p v-else>
                                        <span class="fw-bold">Start Time:</span> {{ week.startDate }}
                                    </p>
                                    <p v-if="!week.isClosed">
                                        <span class="fw-bold">End Time:</span> {{ week.endDate }}
                                    </p>
                                </div>
                                <h3>{{ week.label }}</h3>
                                <button class="btn btn-danger" @click="deleteWeek(index)">Delete</button>
                            </div>
                        </div>
                        <div v-else>
                            <p>No weeks selected.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <RouterLink to=/BusinessType class="w-100">
            <button class="btn btn-dark w-100 py-3 my-3" type="submit">Save & Continue</button>
        </RouterLink>
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
                { shortLabel: "Mon", label: "Monday", startDate: "", endDate: "", isClosed: false, isAllDay: false },
                { shortLabel: "Tue", label: "Tuesday", startDate: "", endDate: "", isClosed: false, isAllDay: false },
                { shortLabel: "Wed", label: "Wednesday", startDate: "", endDate: "", isClosed: false, isAllDay: false },
                { shortLabel: "Thu", label: "Thursday", startDate: "", endDate: "", isClosed: false, isAllDay: false },
                { shortLabel: "Fri", label: "Friday", startDate: "", endDate: "", isClosed: false, isAllDay: false },
                { shortLabel: "Sat", label: "Saturday", startDate: "", endDate: "", isClosed: false, isAllDay: false },
                { shortLabel: "Sun", label: "Sunday", startDate: "", endDate: "", isClosed: false, isAllDay: false },
            ],
            selectedIndexes: [],
            selectedWeeks: [],
            disabledWeeks: [],
        };
    },

    methods: {
        isWeekDisabled(index) {
            const week = this.weeks[index];
            return this.disabledWeeks.some(
                disabledWeek => disabledWeek.label === week.label && disabledWeek.startDate === week.startDate && disabledWeek.endDate === week.endDate
            );
        },
        deleteWeek(index) {
            const deletedWeek = this.selectedWeeks.splice(index, 1)[0];
            const disabledWeekIndex = this.disabledWeeks.findIndex(
                week => week.label === deletedWeek.label && week.startDate === deletedWeek.startDate && week.endDate === deletedWeek.endDate
            );
            if (disabledWeekIndex !== -1) {
                this.disabledWeeks.splice(disabledWeekIndex, 1);
            }
            deletedWeek.bgColor = ''; // Reset background color
        },
        handleSubmit() {
            const selectedTime = {
                startDate: document.getElementById('startDate').value,
                endDate: document.getElementById('endDate').value
            };

            const newSelectedWeeks = this.selectedIndexes.map(index => {
                const week = this.weeks[index];
                if (week.isClosed) {
                    week.startDate = "00:00";
                    week.endDate = "00:00";
                    week.bgColor = 'warning';
                    this.disabledWeeks.push({ ...week });
                    return {
                        ...week,
                        startDate: "00:00",
                        endDate: "00:00"
                    };
                } else if (week.isAllDay) {
                    week.startDate = "00:00";
                    week.endDate = "24:00";
                    week.bgColor = 'warning';
                    this.disabledWeeks.push({ ...week });
                    return {
                        ...week,
                        startDate: "00:00",
                        endDate: "24:00"
                    };
                } else {
                    week.bgColor = 'warning';
                    this.disabledWeeks.push({ ...week });
                    return {
                        ...week,
                        ...selectedTime
                    };
                }
            });

            this.selectedWeeks.push(...newSelectedWeeks);
            this.selectedIndexes = [];
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
            this.selectedWeeks.push(selectedWeek);
            this.selectedWeekIndex = null;
        },
        toggleSelection(index) {
            const selectedWeek = this.weeks[index];
            const isWeekSelected = this.selectedWeeks.some(
                week => week.label === selectedWeek.label && week.startDate === selectedWeek.startDate && week.endDate === selectedWeek.endDate
            );
            const isWeekDisabled = this.disabledWeeks.some(
                week => week.label === selectedWeek.label && week.startDate === selectedWeek.startDate && week.endDate === selectedWeek.endDate
            );

            if (isWeekSelected || isWeekDisabled) {
                // Week is already selected or disabled, do nothing
                return;
            }

            const selectedIndex = this.selectedIndexes.indexOf(index);
            if (selectedIndex === -1) {
                this.selectedIndexes.push(index);
            } else {
                this.selectedIndexes.splice(selectedIndex, 1);
            }
        },
        isSelected(index) {
            const week = this.weeks[index];
            const isInSelectedIndexes = this.selectedIndexes.includes(index);
            const isInSelectedWeeks = this.selectedWeeks.some(
                selectedWeek => selectedWeek.label === week.label && selectedWeek.startDate === week.startDate && selectedWeek.endDate === week.endDate
            );
            const isInDisabledWeeks = this.disabledWeeks.some(
                disabledWeek => disabledWeek.label === week.label && disabledWeek.startDate === week.startDate && disabledWeek.endDate === week.endDate
            );

            return isInSelectedIndexes || isInSelectedWeeks || isInDisabledWeeks;
        },
        isWeekSelected(index) {
            const week = this.weeks[index];
            return week.startDate !== "" && week.endDate !== "" && !week.isClosed;
        },
        setClosed(index) {
            console.log("Closed button clicked");
            if (index >= 0 && index < this.weeks.length) {
                const week = this.weeks[index];
                if (week) {
                    console.log("Closing week:", week);
                    week.isClosed = !week.isClosed;
                    week.isAllDay = false; // Reset isAllDay
                    if (week.isClosed) {
                        week.startDate = "00:00";
                        week.endDate = "00:00";
                    } else {
                        week.startDate = "";
                        week.endDate = "";
                    }
                }
            } else {
                console.error("Invalid index provided:", index);
            }
        },
        setTwentyFourHours() {
            console.log("24 hrs button clicked");
            for (let i = 0; i < this.weeks.length; i++) {
                const week = this.weeks[i];
                week.isAllDay = !week.isAllDay;
                week.isClosed = false; // Reset isClosed
                if (week.isAllDay) {
                    week.startDate = "00:00";
                    week.endDate = "24:00";
                } else {
                    week.startDate = "";
                    week.endDate = "";
                }
            }
        },

        handleAllDaysSelection() {
            const selectedWeekIndex = this.selectedWeekIndex;
            const selectedWeek = this.weeks[selectedWeekIndex];

            if (selectedWeek) {
                // Update start and end times for all days
                for (let i = 0; i < this.weeks.length; i++) {
                    this.weeks[i].startDate = selectedWeek.startDate;
                    this.weeks[i].endDate = selectedWeek.endDate;
                }

                // Clear the selectedWeekIndex and selectedIndexes
                this.selectedWeekIndex = null;
                this.selectedIndexes = [];
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

<style scoped></style>