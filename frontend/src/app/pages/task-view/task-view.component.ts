import { Component, OnInit } from "@angular/core";
import { TaskService } from "src/app/task.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Task } from "src/app/models/task.model";
import { List } from "src/app/models/list.model";

@Component({
  selector: "app-task-view",
  templateUrl: "./task-view.component.html",
  styleUrls: ["./task-view.component.scss"]
})
export class TaskViewComponent implements OnInit {
  lists: List[];
  tasks: Task[];

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.taskService.getTasks(params.listId).subscribe((tasks: Task[]) => {
        this.tasks = tasks;
      });
    });

    this.taskService.getLists().subscribe((lists: List[]) => {
      this.lists = lists;
    });
  }

  onTaskClick(task: Task) {
    // We want to tset the task to completed
    this.taskService.complete(task).subscribe(() => {
      // the task has been set to completed successfully
      console.log("Completed successfully!");
      task.completed = !task.completed;
    });
  }
}
