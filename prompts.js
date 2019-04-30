"use strict";
/**
 * Created by user on 2019/4/23.
 */
const prompts = [
    {
        name: 'replaceFiles',
        type: 'confirm',
        message: 'Replace current files with preset files?',
        default: false
    },
    {
        name: 'depsVueAnalytics',
        type: 'confirm',
        message: 'Add vue-analytics?',
        default: true
    },
    {
        name: 'depsVueHeadful',
        type: 'confirm',
        message: 'Add vue-headful?',
        default: true
    },
    {
        name: 'depsVueSession',
        type: 'confirm',
        message: 'Add vue-session?',
        default: true
    },
    {
        name: 'depsVueGlobalEvents',
        type: 'confirm',
        message: 'Add vue-global-events?',
        default: true
    },
    {
        name: 'depsBluebird',
        type: 'confirm',
        message: 'Add bluebird?',
        default: true
    },
];
module.exports = prompts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbXB0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb21wdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHO0FBVUgsTUFBTSxPQUFPLEdBQW9CO0lBQ2hDO1FBQ0MsSUFBSSxFQUFFLGNBQWM7UUFDcEIsSUFBSSxFQUFFLFNBQVM7UUFDZixPQUFPLEVBQUUsMENBQTBDO1FBQ25ELE9BQU8sRUFBRSxLQUFLO0tBQ2Q7SUFDRDtRQUNDLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsSUFBSSxFQUFFLFNBQVM7UUFDZixPQUFPLEVBQUUsb0JBQW9CO1FBQzdCLE9BQU8sRUFBRSxJQUFJO0tBQ2I7SUFDRDtRQUNDLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsSUFBSSxFQUFFLFNBQVM7UUFDZixPQUFPLEVBQUUsa0JBQWtCO1FBQzNCLE9BQU8sRUFBRSxJQUFJO0tBQ2I7SUFDRDtRQUNDLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsSUFBSSxFQUFFLFNBQVM7UUFDZixPQUFPLEVBQUUsa0JBQWtCO1FBQzNCLE9BQU8sRUFBRSxJQUFJO0tBQ2I7SUFDRDtRQUNDLElBQUksRUFBRSxxQkFBcUI7UUFDM0IsSUFBSSxFQUFFLFNBQVM7UUFDZixPQUFPLEVBQUUsd0JBQXdCO1FBQ2pDLE9BQU8sRUFBRSxJQUFJO0tBQ2I7SUFDRDtRQUNDLElBQUksRUFBRSxjQUFjO1FBQ3BCLElBQUksRUFBRSxTQUFTO1FBQ2YsT0FBTyxFQUFFLGVBQWU7UUFDeEIsT0FBTyxFQUFFLElBQUk7S0FDYjtDQUNELENBQUM7QUFFRixpQkFBUyxPQUFPLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgdXNlciBvbiAyMDE5LzQvMjMuXG4gKi9cblxuaW50ZXJmYWNlIElWdWVDbGlQcm9tcHRcbntcblx0bmFtZTogc3RyaW5nLFxuXHR0eXBlOiAnY29uZmlybScgfCBzdHJpbmcsXG5cdG1lc3NhZ2U6IHN0cmluZyxcblx0ZGVmYXVsdDogdW5rbm93blxufVxuXG5jb25zdCBwcm9tcHRzOiBJVnVlQ2xpUHJvbXB0W10gPSBbXG5cdHtcblx0XHRuYW1lOiAncmVwbGFjZUZpbGVzJyxcblx0XHR0eXBlOiAnY29uZmlybScsXG5cdFx0bWVzc2FnZTogJ1JlcGxhY2UgY3VycmVudCBmaWxlcyB3aXRoIHByZXNldCBmaWxlcz8nLFxuXHRcdGRlZmF1bHQ6IGZhbHNlXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnZGVwc1Z1ZUFuYWx5dGljcycsXG5cdFx0dHlwZTogJ2NvbmZpcm0nLFxuXHRcdG1lc3NhZ2U6ICdBZGQgdnVlLWFuYWx5dGljcz8nLFxuXHRcdGRlZmF1bHQ6IHRydWVcblx0fSxcblx0e1xuXHRcdG5hbWU6ICdkZXBzVnVlSGVhZGZ1bCcsXG5cdFx0dHlwZTogJ2NvbmZpcm0nLFxuXHRcdG1lc3NhZ2U6ICdBZGQgdnVlLWhlYWRmdWw/Jyxcblx0XHRkZWZhdWx0OiB0cnVlXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnZGVwc1Z1ZVNlc3Npb24nLFxuXHRcdHR5cGU6ICdjb25maXJtJyxcblx0XHRtZXNzYWdlOiAnQWRkIHZ1ZS1zZXNzaW9uPycsXG5cdFx0ZGVmYXVsdDogdHJ1ZVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ2RlcHNWdWVHbG9iYWxFdmVudHMnLFxuXHRcdHR5cGU6ICdjb25maXJtJyxcblx0XHRtZXNzYWdlOiAnQWRkIHZ1ZS1nbG9iYWwtZXZlbnRzPycsXG5cdFx0ZGVmYXVsdDogdHJ1ZVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ2RlcHNCbHVlYmlyZCcsXG5cdFx0dHlwZTogJ2NvbmZpcm0nLFxuXHRcdG1lc3NhZ2U6ICdBZGQgYmx1ZWJpcmQ/Jyxcblx0XHRkZWZhdWx0OiB0cnVlXG5cdH0sXG5dO1xuXG5leHBvcnQgPSBwcm9tcHRzXG4iXX0=